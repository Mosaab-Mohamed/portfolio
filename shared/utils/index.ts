import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { IProject } from "../types/project";

export async function getPage<T>(pageName: string) {
	try {
		const q = query(collection(db, "pages"), where("name", "==", pageName));
		return (await getDocs(q)).docs[0].data() as T;
	} catch (error) {
		return;
	}
}

export async function getProject(projectName: string | undefined) {
	if (!projectName) return;
	try {
		const q = query(
			collection(db, "projects"),
			where("name", "==", projectName)
		);
		return (await getDocs(q)).docs[0].data() as IProject;
	} catch (error) {
		return;
	}
}
