import AppRouter from "./components/molecules/AppRouter";
import { Provider } from "react-redux";
import { useStoreConfig } from "./config/redux/controllers/useStoreConfig";
import { PersistGate } from "redux-persist/integration/react";
import { useInterceptor } from "./config/interceptor/controller/useInterceptor";
import "./common/styles/globals.css";
import { Toaster } from "react-hot-toast";

function App() {
    const { persistor, store } = useStoreConfig();
    useInterceptor(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Toaster />
                <AppRouter />
            </PersistGate>
        </Provider>
    );
}

export default App;
