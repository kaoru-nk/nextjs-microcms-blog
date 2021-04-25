import { MicroCMSCaptionValue } from '~/src/types/microCMS/Common'
import { MicroCMSReqHeaders } from '~/src/types/microCMS/Headers'
import { MicroCMSGetSingularQuery } from '~/src/types/microCMS/Query'
import { Blog } from '~/src/types/microCMS/api/Blog'

export type Methods = {
  get: {
    resBody: {
      contents: Blog[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
