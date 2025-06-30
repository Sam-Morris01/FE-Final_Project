// Re-export all functions for backward compatibility
export {
  checkResponse,
  baseUrl,
  newsApiBaseUrl,
  NEWS_API_KEY,
} from "./helpers";
export { searchNews } from "./newsAPI";
export { authorize, checkToken, mockSignIn, mockCheckToken } from "./authAPI";
export { saveArticle, deleteArticle } from "./articleAPI";
