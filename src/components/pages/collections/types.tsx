
export enum Screen {
  fetchMetadata = 'fetch_metadata',
  checkDetails = 'check_details',
  boundNFTProcessing = 'boundnft_proccesing',
  boundNFTCreationSuccess = 'boundnft_creation_success',
}

export type CreateBoundNFTContext = {
  screenState?: Screen
  setScreenState?: any
}