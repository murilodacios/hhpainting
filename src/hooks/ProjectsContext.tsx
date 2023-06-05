import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { useAuthenticate } from "./AuthContext";

type IUpdateProjects = {
    id: string;
    projectId: string;
    name: string;
    description: string;
    date: string;
}

type IProjectsData = {
    id: string;
    name: string;
    description: string;
    startDate: string;
    rentability: number;
    about: string;
    latitude: string;
    longitude: string;
    userId: string;
    updateProjects?: IUpdateProjects[]
}

type ProjectsProviderProps = {
    children: ReactNode
}

type ProjectsContextData = {
    projects: IProjectsData[]
    // createNewTaxAction(data: ICreateActionsData): Promise<IActionsData | undefined>
}

export const ProjectsContext = createContext({} as ProjectsContextData)

export function ProjectsProvider({ children }: ProjectsProviderProps) {

    const { user } = useAuthenticate()

    const [projects, setProjects] = useState<IProjectsData[]>([])

    useEffect(() => {

        api.get(`/projects/list-projects/${user?.id}`).then(response => {
            setProjects(response.data)
        })

    }, [user])

    // async function createNewTaxAction(data: ICreateActionsData): Promise<IActionsData | undefined> {

    //     try {
    //         const response = await api.post(`/tax-actions`, {
    //             ...data
    //         })

    //         const action = response.data

    //         setActions([action, ...actions])

    //         return action
    //     } catch {
    //         console.log("Não foi possível criar essa ação fiscal")
    //     }

    // }


    return (
        <ProjectsContext.Provider value={{ projects }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export const useProjects = () => {
    const context = useContext(ProjectsContext);
    return context;
}