interface History {
  go: Function,
  push: Function,
  replace: Function
}

interface Location {
  pathname: string
}

interface Match {
  isExact?: boolean | false,
  params?: object,
  path?: string | null,
  url?: string | null
}


interface Route {
  history: History,
  location: Location,
  match: Match 
}



export default Route
