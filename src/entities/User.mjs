const user = []

 class User {
    GetUserByEmail(userEmail) {
        var isNull = null
        user.forEach((item) => {
            const { email } = item;

            if(userEmail === email) {
                isNull = item
            }
        })
        return isNull
    }

    create({userName, email, password}) {
        user.push({userName, email, password});
        return {userName, email, password}
    }

    findByEmail(userEmail) {
        var isNull = null
        user.forEach((item) => {
            const { email } = item;

            if(userEmail === email) {
                isNull = email
            }
        })
        return isNull
    }

 }

 export default User;