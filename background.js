chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [{
        "id": 1,
        "priority": 1,
        "action": { "type": "block" },
        "condition": {
            "urlFilter": "*",
            "domains": ["doubleclick.net", "googlesyndication.com", "googleadservices.com"]
        }
    }],
    removeRuleIds: [1]
});