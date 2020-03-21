from browser import alert, document, window

def handle_alert_from_react(encodedAlert):
  alert(window.decodeURIComponent(encodedAlert))

document.brython_alert = handle_alert_from_react

ready_event = window.Event.new("BRYTHON_READY")
window.dispatchEvent(ready_event)
