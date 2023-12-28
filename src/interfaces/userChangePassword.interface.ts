export interface UserChangePassword {
    userId: string
    oldPasswordHash: string
    oldSalt: string
    confirmationCode: string
    confirmed: boolean
    requestConfirmationDate: Date
    confirmationDate: Date
    newPasswordHash: string
    newSalt: string
}