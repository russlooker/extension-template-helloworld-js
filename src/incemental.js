import { LookerEmbedSDK } from '@looker/embed-sdk'



<div ref={}></div>

const { core40SDK, extensionSDK } = useContext(ExtensionContext)

const embedCtrRef =  useCallback((el) => {
    const hostUrl = extensionSDK.lookerHostData.hostUrl
      LookerEmbedSDK.init(hostUrl)
      LookerEmbedSDK.createExploreWithUrl(`${hostUrl}/embed/query/join20/order_items?qid=${qid}&sdk=2&embed_domain=${hostUrl}&sandboxed_host=true`)
        .appendTo(el)
        .on()
        .build() 
        .connect()
  },[])

  sdk.run_inline_query
  body = {
    result_format: 'json',
    limit: 1000,
    body: {
       total: true
      ,model: 'join20'
      ,view: 'order_items'
      ,fields: ['users.country','users.state']
      ,filters: {'users.country':'USA'}
      ,sorts:['users.state']
    },
  }

  const [geos, setGeos] = useState()
  remove -> const [message, setMessage] = useState()

  setGeos(
    states.map(
    (state) => { return <li>{state['users.state']}</li> }
    )
  )

  <ul>{geos}</ul> (in the JSX)