import { LoadingProvider } from "context/loading-context";

const LoadingProviderMock = ({ children }) => (
  <LoadingProvider
    value={{
      loading: false,
      setLoading: jest.fn()
    }}
  >
    {children}
  </LoadingProvider>
);

export { LoadingProviderMock };
