export default defineNuxtPlugin(() => {
  const $api = $fetch.create({
    onRequest({ options }) {
      const headersInit: HeadersInit = {};
      // Add Authorization header
      options.headers = headersInit || {};
      options.headers.Authorization =
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjIwNjM4Mjk3NjNmMzc3ZWUwNTBiNjY3ZjRkMDg5NCIsInN1YiI6IjVjNGMwZGViOTI1MTQxMGUwYTU5NTI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CyQpHcXc4d8FOqdt0UjDcdA4O2U3Ci9ewoIusIo3t8Q";
    },
  });
  // Expose to useNuxtApp().$api
  return {
    provide: {
      api: $api,
    },
  };
});
