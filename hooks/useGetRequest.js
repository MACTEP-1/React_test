import { useCallback, useState } from "react";

const { default: loadingStatus } = require("@/helpers/loadingStatus");

const useGetRequest = (url) => {
    const [loadingState, setLoadingState] = 
        useState(loadingStatus.isLoading);

    const get = useCallback(async () => {
        setLoadingState(loadingStatus.isLoading);
        try {
            const resp = await fetch(url);
            const res = await resp.json();
            setLoadingState(loadingStatus.loaded);
            return res;
        } catch {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [url]);
    return {get, loadingState};
};

export default useGetRequest;