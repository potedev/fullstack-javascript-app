type createUserProps = {
    email: string,
    password: string
}

export class UserRepo {
    private entities: any

    constructor(entities: any) {
        this.entities = entities
    }

    public async create(userProps: createUserProps) {
        const UserEntity = this.entities.user

        const exists = await this.exists(userProps.email);
        console.log('create ?');

        if (!exists) {
            await UserEntity.create(
                {
                    data: {
                        email: userProps.email,
                        password: userProps.password
                    }
                })
        }

        return
    }

    public async exists(email: string): Promise<boolean> {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        console.log('exists : ', result);

        return !!result === true;
    }

    public async getUserByEmail(email: string) {
        const UserEntity = this.entities.user;

        const result = await UserEntity.findUnique({ where: { email: email } })

        return result
    }
}