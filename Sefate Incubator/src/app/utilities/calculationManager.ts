export class CalculationManager {

  static calculateProfitmargin(profitaftertax: number, revenue: number): number {
    return profitaftertax / revenue;
  }

  static calculateGrossProfitMargin(revenueCostofProduction: number, revenue: number): number {
    return revenueCostofProduction / revenue;
  }

  static calculateCashGeneratingAbilityRatio(cashGeneratedFromOperations: number, EBITDA: number): number {
    return cashGeneratedFromOperations / EBITDA;
  }

  static calculateDebtorsDays(accountsReceivables: number, revenue: number) : number {
    return (accountsReceivables / revenue) * 365;
  }

  static calculateCreditorsDays(accountsPayable: number, costOfProduction: number) {
    return (accountsPayable / costOfProduction) * 365;
  }

  static calculateInventoryDays(inventory: number, costOfProduction: number) {
    return (inventory / costOfProduction) * 365;
  }

  static calculateSolvencyTest(totalAsset: number, totalLiabilities: number) {
    return totalAsset / totalLiabilities;
  }

  static calculateLiquidityTest(currentAsset: number, currentLiabilities: number) {
    return currentAsset / currentLiabilities;
  }

  static calculateAcidTest(currentAsset: number, inventory: number) {
     return currentAsset - inventory;
  }

  static calculateGearing(totalLiabilities: number,totalEquity: number) {
    return totalLiabilities / totalEquity;
  }

  static calculateReturnOnEquity(profitaftertax: number, totalEquity: number) {
    return profitaftertax / totalEquity;
  }
}
