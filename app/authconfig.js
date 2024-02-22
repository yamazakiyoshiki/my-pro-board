export const authConfig = {
  providers:[],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user;
      const isOnHomeboard = request.nextUrl.pathname.startsWith("/homeboard");
      if (isOnHomeboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/homeboard", request.nextUrl));
      }
      return true;
    },
  },
};