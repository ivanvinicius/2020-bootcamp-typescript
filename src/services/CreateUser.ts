
interface UserTechs {
  technology: string,
  experienceLevel: number,
}

interface CreateUserData {
  name?: string,
  email: string,
  password: string,
  techs: Array<string | UserTechs>,
  // techs: string[],
}

export default function createUser({ name, email, password, techs }: CreateUserData) {
  const user = { name, email, password };

  return user;
}