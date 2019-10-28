function newOnFocus () {
  thisObject = {
    getNodeThatIsOnFocus: getNodeThatIsOnFocus
  }
  return thisObject

  function getNodeThatIsOnFocus (node) {
    if (node === undefined) { return }
    switch (node.type) {
      case 'Code':
        {
          if (node.payload.uiObject.isOnFocus === true) {
            return node
          } else {
            return
          }
        }
      case 'Condition':
        {
          let child
          child = getNodeThatIsOnFocus(node.code)
          if (child !== undefined) {
            return child
          }
          if (node.payload.uiObject.isOnFocus === true) {
            return node
          } else {
            return
          }
        }
      case 'Situation': {
        let child
        for (let m = 0; m < node.conditions.length; m++) {
          child = getNodeThatIsOnFocus(node.conditions[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Formula':
        {
          if (node.payload.uiObject.isOnFocus === true) {
            return node
          } else {
            return
          }
        }
      case 'Next Phase Event':
        {
          let child
          for (let m = 0; m < node.situations.length; m++) {
            child = getNodeThatIsOnFocus(node.situations[m])
            if (child !== undefined) {
              return child
            }
          }
          for (let m = 0; m < node.announcements.length; m++) {
            child = getNodeThatIsOnFocus(node.announcements[m])
            if (child !== undefined) {
              return child
            }
          }
          if (node.payload.uiObject.isOnFocus === true) {
            return node
          } else {
            return
          }
        }
      case 'Phase': {
        let child
        child = getNodeThatIsOnFocus(node.formula)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.nextPhaseEvent)
        if (child !== undefined) {
          return child
        }
        for (let m = 0; m < node.announcements.length; m++) {
          child = getNodeThatIsOnFocus(node.announcements[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Stop': {
        let child
        for (let m = 0; m < node.phases.length; m++) {
          child = getNodeThatIsOnFocus(node.phases[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Take Profit': {
        let child
        for (let m = 0; m < node.phases.length; m++) {
          child = getNodeThatIsOnFocus(node.phases[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Take Position Event': {
        let child
        for (let m = 0; m < node.situations.length; m++) {
          child = getNodeThatIsOnFocus(node.situations[m])
          if (child !== undefined) {
            return child
          }
        }
        for (let m = 0; m < node.announcements.length; m++) {
          child = getNodeThatIsOnFocus(node.announcements[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Trigger On Event': {
        let child
        for (let m = 0; m < node.situations.length; m++) {
          child = getNodeThatIsOnFocus(node.situations[m])
          if (child !== undefined) {
            return child
          }
        }
        for (let m = 0; m < node.announcements.length; m++) {
          child = getNodeThatIsOnFocus(node.announcements[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Trigger Off Event': {
        let child
        for (let m = 0; m < node.situations.length; m++) {
          child = getNodeThatIsOnFocus(node.situations[m])
          if (child !== undefined) {
            return child
          }
        }
        for (let m = 0; m < node.announcements.length; m++) {
          child = getNodeThatIsOnFocus(node.announcements[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Initial Definition': {
        let child
        child = getNodeThatIsOnFocus(node.stopLoss)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.takeProfit)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.positionSize)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.positionRate)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Open Execution': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Close Execution': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Position Size': {
        let child
        child = getNodeThatIsOnFocus(node.formula)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Position Rate': {
        let child
        child = getNodeThatIsOnFocus(node.formula)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Trigger Stage': {
        let child
        child = getNodeThatIsOnFocus(node.triggerOn)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.triggerOff)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.takePosition)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Open Stage': {
        let child
        child = getNodeThatIsOnFocus(node.initialDefinition)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.openExecution)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Manage Stage': {
        let child
        child = getNodeThatIsOnFocus(node.stopLoss)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.takeProfit)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Close Stage': {
        let child
        child = getNodeThatIsOnFocus(node.closeExecution)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Strategy': {
        let child
        child = getNodeThatIsOnFocus(node.triggerStage)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.openStage)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.manageStage)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.closeStage)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Base Asset': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Time Range': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Time Period': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Slippage': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Fee Structure': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Parameters': {
        let child
        child = getNodeThatIsOnFocus(node.baseAsset)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.timeRange)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.timePeriod)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.slippage)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.feeStructure)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Trading System': {
        let child
        child = getNodeThatIsOnFocus(node.parameters)
        if (child !== undefined) {
          return child
        }
        for (let m = 0; m < node.strategies.length; m++) {
          child = getNodeThatIsOnFocus(node.strategies[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Personal Data': {
        let child
        for (let m = 0; m < node.exchangeAccounts.length; m++) {
          child = getNodeThatIsOnFocus(node.exchangeAccounts[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Exchange Account': {
        let child
        for (let m = 0; m < node.assets.length; m++) {
          child = getNodeThatIsOnFocus(node.assets[m])
          if (child !== undefined) {
            return child
          }
        }
        for (let m = 0; m < node.keys.length; m++) {
          child = getNodeThatIsOnFocus(node.keys[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Exchange Account Asset': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Exchange Account Key': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Social Bots': {
        let child
        for (let m = 0; m < node.bots.length; m++) {
          child = getNodeThatIsOnFocus(node.bots[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Telegram Bot': {
        let child
        for (let m = 0; m < node.announcements.length; m++) {
          child = getNodeThatIsOnFocus(node.announcements[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Announcement': {
        child = getNodeThatIsOnFocus(node.formula)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Layer Manager': {
        let child
        for (let m = 0; m < node.layers.length; m++) {
          child = getNodeThatIsOnFocus(node.layers[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Layer': {
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Task Manager': {
        let child
        for (let m = 0; m < node.tasks.length; m++) {
          child = getNodeThatIsOnFocus(node.tasks[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Task': {
        let child
        child = getNodeThatIsOnFocus(node.bot)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Sensor Bot Instance': {
        let child
        for (let m = 0; m < node.processes.length; m++) {
          child = getNodeThatIsOnFocus(node.processes[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Indicator Bot Instance': {
        let child
        for (let m = 0; m < node.processes.length; m++) {
          child = getNodeThatIsOnFocus(node.processes[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Trading Bot Instance': {
        let child
        for (let m = 0; m < node.processes.length; m++) {
          child = getNodeThatIsOnFocus(node.processes[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Process Instance': {
        let child
        child = getNodeThatIsOnFocus(node.session)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }

      case 'Backtesting Session': {
        let child
        child = getNodeThatIsOnFocus(node.parameters)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.layerManager)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.socialBots)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }

      case 'Live Trading Session': {
        let child
        child = getNodeThatIsOnFocus(node.parameters)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.layerManager)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.socialBots)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }

      case 'Fordward Testing Session': {
        let child
        child = getNodeThatIsOnFocus(node.parameters)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.layerManager)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.socialBots)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }

      case 'Paper Trading Session': {
        let child
        child = getNodeThatIsOnFocus(node.parameters)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.layerManager)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.socialBots)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }

      case 'Network Node': {
        let child
        for (let m = 0; m < node.taskManagers.length; m++) {
          child = getNodeThatIsOnFocus(node.taskManagers[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Network': {
        let child
        for (let m = 0; m < node.networkNodes.length; m++) {
          child = getNodeThatIsOnFocus(node.networkNodes[m])
          if (child !== undefined) {
            return child
          }
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
      case 'Definition': {
        let child
        child = getNodeThatIsOnFocus(node.tradingSystem)
        if (child !== undefined) {
          return child
        }
        child = getNodeThatIsOnFocus(node.personalData)
        if (child !== undefined) {
          return child
        }
        if (node.payload.uiObject.isOnFocus === true) {
          return node
        } else {
          return
        }
      }
    }
  }
}