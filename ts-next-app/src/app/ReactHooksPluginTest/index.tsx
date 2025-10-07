'use client'
import { useRouter } from "next/router";
import { useEffect, useState, type FunctionComponent } from "react";

const ReactHooksPluginTest:FunctionComponent = ()=>{
    const [state, setState] = useState(0);
    const router = useRouter();
    useEffect(()=>{
      void router.push('/some-route?state='+state);
    },[router,state])
    return <div onClick={()=>{
          setState(state+1)
    }}>ReactHooksPluginTest</div>;
}
export default ReactHooksPluginTest;