import app from "./app";
const main = () => {
    app.listen(app.get("port"));
    console.log("🚀 main ~ server run", app.get("port"));
    
};
main();
