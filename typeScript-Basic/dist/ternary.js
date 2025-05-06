"use strict";
{
    let isLogin = "true";
    //ternary
    const result = isLogin ? "Welcome" : "Guest";
    const result2 = isLogin !== null && isLogin !== void 0 ? isLogin : "Guest";
    const result3 = isLogin && "Guest";
    const result4 = isLogin || "Guest";
    console.log({ result, result2, result3, result4 });
}
