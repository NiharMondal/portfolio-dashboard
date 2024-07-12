export type TExperience = {
	position: string;
	company: string;
	start_date: string;
	end_date: string;
	responsibilities: string;
};

export type TExperienceResponse = {
    id:string;
	position: string;
	company: string;
	start_date: string;
	end_date: string;
	responsibilities: string;
    createdAt:string;
    updatedAt:string;

};

export type TProject = {
	title: string;
	description: string;
	photo: string;
};

export type TProjectResponse = {
    id:string;
	title: string;
	photo: string;
	description: string;
    slug:string;
    createdAt:string;
    updatedAt:string;
};


export type TBlog = {
	title: string;
	description: string;
};


export type TBlogResponse = {
    id:string;
	title: string;
	description: string;
    slug:string;
    createdAt:string;
    updatedAt:string;
};

export type TLoginCredentials = {
	email: string;
	password: string;
}



export type TResponseFromServer<T> = {
    success:boolean;
    message:string;
    data: T
}


