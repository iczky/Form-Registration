import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface FormData {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface FormDataContextType {
  formData: FormData[];
  fetchData: () => Promise<void>;
}

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

const FormDataProvider: React.FC<{ children: JSX.Element | ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/data");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data: FormData[] = await response.json();
      setFormData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormDataContext.Provider value={{ formData, fetchData }}>
      {children}
    </FormDataContext.Provider>
  );
};

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { FormDataProvider, useFormData };
