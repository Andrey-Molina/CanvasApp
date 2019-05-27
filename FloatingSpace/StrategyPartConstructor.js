
function newStrategyPartConstructor () {
  const MODULE_NAME = 'Strategy Part Constructor'
  const ERROR_LOG = true
  const logger = newWebDebugLog()
  logger.fileName = MODULE_NAME

  let thisObject = {
    createStrategyPart: createStrategyPart,
    destroyStrategyPart: destroyStrategyPart,
    initialize: initialize,
    finalize: finalize
  }

  let floatingLayer

  return thisObject

  function finalize () {
    floatingLayer = undefined

    payload.uiObject.finalize()
    payload.uiObject = undefined
  }

  function initialize (pFloatingLayer) {
    floatingLayer = pFloatingLayer
  }

  function createStrategyPart (payload) {
    let floatingObject = newFloatingObject()
    floatingObject.fitFunction = canvas.floatingSpace.fitIntoVisibleArea
    floatingObject.container.connectToParent(canvas.floatingSpace.container, false, false, false, false, false, false, false, false)
    floatingObject.initialize('Strategy Part', payload)
    payload.floatingObject = floatingObject

    if (payload.node.savedPayload !== undefined) {
      position = {
        x: payload.node.savedPayload.position.x,
        y: payload.node.savedPayload.position.y
      }
      floatingObject.setPosition(position)
      payload.node.savedPayload.position = undefined
      if (payload.node.savedPayload.floatingObject.isPinned === true) {
        floatingObject.pinToggle()
      }
    }

    let strategyPart = newStrategyPart()
    payload.uiObject = strategyPart
    strategyPart.fitFunction = canvas.floatingSpace.fitIntoVisibleArea
    strategyPart.isVisibleFunction = canvas.floatingSpace.isThisPointVisible
    let menuItemsInitialValues = getMenuItemsInitialValues(strategyPart, floatingObject, payload)
    strategyPart.initialize(payload, menuItemsInitialValues)
    strategyPart.container.connectToParent(floatingObject.container, false, false, true, true, false, false, true, true, true, true, true)

    if (payload.node.savedPayload !== undefined) {
      if (payload.node.savedPayload.uiObject.isRunning === true) {
        strategyPart.setRunningStatus()
        canvas.strategySpace.workspace.tradingSystem = payload.node
      }
    }
    payload.node.savedPayload = undefined

    setFloatingObjectBasicProperties(floatingObject, payload)

    floatingLayer.addFloatingObject(floatingObject)

    return
  }

  function getMenuItemsInitialValues (strategyPart, floatingObject, payload) {
    let menuItemsInitialValues = []
    switch (payload.node.type) {
      case 'Trading System': {
        floatingObject.isPinned = true
        floatingObject.positionLocked = true
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: true,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Run Trading System',
            actionFunction: payload.uiObject.run,
            label: 'Run',
            visible: false,
            iconPathOn: 'paper-plane',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -60
          },
          {
            action: 'Save Trading System',
            actionFunction: payload.onMenuItemClick,
            label: 'Save Changes',
            workingLabel: 'Saving...',
            workDoneLabel: 'Saved',
            workFailedLabel: 'Not Saved',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'New Strategy',
            actionFunction: payload.onMenuItemClick,
            label: 'New Strategy',
            visible: false,
            iconPathOn: 'quality',
            iconPathOff: 'quality',
            relatedStrategyPart: 'Strategy',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 60
          }]
        break
      }
      case 'Strategy': {
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Delete Strategy',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Strategy',
            visible: false,
            iconPathOn: 'trash',
            iconPathOff: 'trash',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          }]
        break
      }
      case 'Trigger On Event': {
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            iconPathOn: 'pyramid',
            iconPathOff: 'pyramid',
            relatedStrategyPart: 'Situation',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          }]
        break
      }
      case 'Trigger Off Event': {
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            iconPathOn: 'pyramid',
            iconPathOff: 'pyramid',
            relatedStrategyPart: 'Situation',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          }]
        break
      }
      case 'Take Position Event': {
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            iconPathOn: 'pyramid',
            iconPathOff: 'pyramid',
            relatedStrategyPart: 'Situation',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          }]
        break
      }
      case 'Stop': {
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Add Phase',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Phase',
            visible: false,
            iconPathOn: 'placeholder',
            iconPathOff: 'placeholder',
            relatedStrategyPart: 'Phase',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          }]
        break
      }
      case 'Take Profit': {
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Add Phase',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Phase',
            visible: false,
            iconPathOn: 'placeholder',
            iconPathOff: 'placeholder',
            relatedStrategyPart: 'Phase',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          }]
        break
      }
      case 'Phase': {
        strategyPart.codeEditor = newCodeEditor()
        strategyPart.codeEditor.isVisibleFunction = strategyPart.isVisibleFunction
        strategyPart.codeEditor.initialize()
        strategyPart.codeEditor.container.connectToParent(strategyPart.container, false, false, true, true, false, false, false, false)

        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Edit Code',
            actionFunction: strategyPart.codeEditor.activate,
            label: 'Edit Code',
            visible: false,
            iconPathOn: 'html',
            iconPathOff: 'html',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -60,
            dontShowAtFullscreen: true
          },
          {
            action: 'Add Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Situation',
            visible: false,
            iconPathOn: 'pyramid',
            iconPathOff: 'pyramid',
            relatedStrategyPart: 'Situation',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -20
          },
          {
            action: 'Delete Phase',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Phase',
            visible: false,
            iconPathOn: 'trash',
            iconPathOff: 'trash',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 20
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 60
          }]
        break
      }
      case 'Situation': {
        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Add Condition',
            actionFunction: payload.onMenuItemClick,
            label: 'Add Condition',
            visible: false,
            iconPathOn: 'testing',
            iconPathOff: 'testing',
            relatedStrategyPart: 'Condition',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -40
          },
          {
            action: 'Delete Situation',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Situation',
            visible: false,
            iconPathOn: 'trash',
            iconPathOff: 'trash',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 40
          }]
        break
      }
      case 'Condition': {
        strategyPart.codeEditor = newCodeEditor()
        strategyPart.codeEditor.isVisibleFunction = strategyPart.isVisibleFunction
        strategyPart.codeEditor.initialize()
        strategyPart.codeEditor.container.connectToParent(strategyPart.container, false, false, true, true, false, false, false, false)

        menuItemsInitialValues = [
          {
            action: 'Pin / Unpin',
            actionFunction: floatingObject.pinToggle,
            actionStatus: floatingObject.getPinStatus,
            currentStatus: false,
            label: undefined,
            visible: false,
            iconPathOn: 'target',
            iconPathOff: 'security',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -135
          },
          {
            action: 'Edit Code',
            actionFunction: strategyPart.codeEditor.activate,
            label: 'Edit Code',
            visible: false,
            iconPathOn: 'html',
            iconPathOff: 'html',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: -40,
            dontShowAtFullscreen: true
          },
          {
            action: 'Delete Condition',
            actionFunction: payload.onMenuItemClick,
            label: 'Delete This Condition',
            visible: false,
            iconPathOn: 'trash',
            iconPathOff: 'trash',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 0
          },
          {
            action: 'Download',
            actionFunction: payload.onMenuItemClick,
            label: 'Download',
            visible: false,
            iconPathOn: 'upload',
            iconPathOff: 'upload',
            rawRadius: 8,
            targetRadius: 0,
            currentRadius: 0,
            angle: 40
          }]
        break
      }
      default: {
        if (ERROR_LOG === true) { logger.write('[ERROR] getMenuItemsInitialValues -> Part Type not Recognized -> type = ' + payload.node.type) }
      }
    }

    return menuItemsInitialValues
  }

  function setFloatingObjectBasicProperties (floatingObject, payload) {
    const FRICTION = 0.97

    switch (payload.node.type) {
      case 'Trading System': {
        level_0()
        break
      }
      case 'Strategy': {
        level_1()
        break
      }
      case 'Trigger On Event': {
        level_2()
        break
      }
      case 'Trigger Off Event': {
        level_2()
        break
      }
      case 'Take Position Event': {
        level_2()
        break
      }
      case 'Trade Exit Event': {
        level_2()
        break
      }
      case 'Stop': {
        level_2()
        break
      }
      case 'Take Profit': {
        level_2()
        break
      }
      case 'Phase': {
        level_3()
        break
      }
      case 'Situation': {
        level_4()
        break
      }
      case 'Condition': {
        level_5()
        break
      }
      default: {
        if (ERROR_LOG === true) { logger.write('[ERROR] initialize -> Part Type not Recognized -> type = ' + payload.node.type) }
        return
      }
    }

    function level_0 () {
      floatingObject.friction = 0.93

      floatingObject.initializeMass(500)
      floatingObject.initializeRadius(45)
      floatingObject.initializeImageSize(80)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.WHITE + ', 1)'
    }

    function level_1 () {
      floatingObject.friction = 0.94

      floatingObject.initializeMass(250)
      floatingObject.initializeRadius(45)
      floatingObject.initializeImageSize(80)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.WHITE + ', 1)'
    }

    function level_2 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(50)
      floatingObject.initializeRadius(40)
      floatingObject.initializeImageSize(70)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.GREEN + ', 1)'
    }

    function level_3 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(10)
      floatingObject.initializeRadius(35)
      floatingObject.initializeImageSize(60)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.RUSTED_RED + ', 1)'
    }

    function level_4 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(10)
      floatingObject.initializeRadius(30)
      floatingObject.initializeImageSize(50)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.TITANIUM_YELLOW + ', 1)'
    }

    function level_5 () {
      floatingObject.friction = FRICTION

      floatingObject.initializeMass(10)
      floatingObject.initializeRadius(25)
      floatingObject.initializeImageSize(30)
      floatingObject.initializeFontSize(10)

      floatingObject.fillStyle = 'rgba(' + UI_COLOR.RED + ', 1)'
    }

    floatingObject.labelStrokeStyle = 'rgba(' + UI_COLOR.WHITE + ', 1)'
  }

  function destroyStrategyPart (payload) {
    floatingLayer.removeFloatingObject(payload.floatingObject.handle)

    payload.floatingObject.finalize()
    payload.floatingObject = undefined

    payload.uiObject.finalize()
    payload.uiObject = undefined
  }
}