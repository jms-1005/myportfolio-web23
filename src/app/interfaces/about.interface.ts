export interface About {
  data: {
    attributes: {
      AboutText:string,
      HeadShot: {
        data: {
          attributes: {
            formats: {
              medium: {
                url:string
              }
            }
          }
        }
      }
    }
  }
}
