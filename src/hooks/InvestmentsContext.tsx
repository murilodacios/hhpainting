import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useAuthenticate } from "./AuthContext";
import { useProjects } from "./ProjectsContext";


type IInvestmentsData = {
    id: string;
    name: string;
    description: string;
    rentability: number;
    area_size: string;
    latitude: string;
    longitude: string;
    type: string;
    status: number;
}

type InvestmentsProviderProps = {
    children: ReactNode
}

type InvestmentsContextData = {
    investments: IInvestmentsData[]
    // createNewTaxAction(data: ICreateActionsData): Promise<IActionsData | undefined>
}

export const InvestmentsContext = createContext({} as InvestmentsContextData)

export function InvestmentsProvider({ children }: InvestmentsProviderProps) {

    const { projects } = useProjects()

    const [investments, setInvestments] = useState<IInvestmentsData[]>([])

    useEffect(() => {
        api.get("/investments").then(response => {
            setInvestments(response.data)
        })
    }, [projects, investments])


    return (
        <InvestmentsContext.Provider value={{ investments }}>
            {children}
        </InvestmentsContext.Provider>
    )
}

export const useInvestments = () => {
    const context = useContext(InvestmentsContext);
    return context;
}