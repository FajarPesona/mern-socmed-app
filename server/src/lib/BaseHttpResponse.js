export class BaseHttpResponse {
  static success(statusCode, data) {
    return { success: true, statusCode, data, error: null };
  }
  static failed(statusCode, errorMsg) {
    return { success: false, statusCode, data: null, errorMsg };
  }
}
