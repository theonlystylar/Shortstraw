/// <reference path="../typings/require_2_1_20.d.ts" />
require.config({
    baseUrl: "scripts/Src"
});
// load bootstrapper module
require(["bootstrapper"], function (bootstrapper) {
    bootstrapper.run();
});
//# sourceMappingURL=main.js.map