export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + amount
      console.log(`Voce depositou: ${amount}, seu saldo atual é: ${this.balance}`)
    }
  }

  withdraw = (amount: number): void => {
    if (this.balance < amount || this.balance == 0) return console.log(`Não é possivel realizar o saque no valor de ${amount}`)
    this.balance == this.balance - amount
    console.log(`Você sacou ${amount}, seu saldo atual é de: ${this.balance}`)
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
