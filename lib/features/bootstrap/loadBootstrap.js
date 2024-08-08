"use client";

import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function BootstrapProvider() {
  useEffect(() => {

    async function loadBootstrap() {
      const bootstrap = await import('bootstrap/dist/js/bootstrap.bundle.min.js');
      window.bootstrap = bootstrap;
    }

    loadBootstrap();
    
  }, []);

  return null;
}

export default BootstrapProvider;