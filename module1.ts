import { XMLHttpRequest as NodeXMLHttpRequest } from 'xmlhttprequest-ts'

// Supports both JSDom (Web Browser) environment and Node environment
export const newHttpRequest = () =>
  typeof window === 'undefined' ? new NodeXMLHttpRequest() : new XMLHttpRequest()

/**
 * Send a HTTP Get request to the specified endpoint.
 * @return NodeXMLHttpRequest | XMLHttpRequest
 */
export function httpGet(url) {
  const request = newHttpRequest()
  try {
    // If running function in node environment, set request timeout
    if (typeof window === 'undefined') request.timeout = 10000
    request.open('GET', url, false)
    request.send(null)
  } catch (error) {
    if (!(error instanceof DOMException)) throw error
  }
  if (request.status !== 200 && request.status !== 304) {
    console.log('notfound');
  }
  return request.responseText
}