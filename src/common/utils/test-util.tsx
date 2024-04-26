import React, { ReactNode } from 'react';
import { Provider } from "react-redux";
import { render, renderHook } from '@testing-library/react';
import { store } from '@/store/store';

 function ProvidersWrapper({ children }:{children:ReactNode}){
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}

const HookWrapper= ({ children }:{children:ReactNode})=>{
  return (
    <Provider store={store}>
        {children}
    </Provider>
  );
}

function ReduxRender(component:ReactNode, options?:any) {
  return render(component, { wrapper: ProvidersWrapper, ...options });
}

function ReduxRenderHook(component: any) {
  return renderHook(()=>component(), { wrapper: HookWrapper });
}

// re-export everything
export * from '@testing-library/react';

// override render method
export { ReduxRender as render ,ReduxRenderHook as renderHook};