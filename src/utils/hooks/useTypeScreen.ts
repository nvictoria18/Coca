import { size } from "@/app/break-points";
import { TypesOfScreen } from "@/types/Screen";
import { useEffect, useState } from "react";

type useTypeScreen = () => TypesOfScreen;

const useTypeScreen = () => {
  const [type, setType] = useState<TypesOfScreen>('laptop')
  const handleResize = () => {
    setType(window.innerWidth < parseInt(size.laptop) ? 'mobile' : 'laptop')
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [type]);

  return type;
}

export default useTypeScreen;