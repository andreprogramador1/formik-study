import { Switch, Route } from 'react-router-dom'
import { Application } from '../components/Application'
import { List } from '../components/List'

export const Routes = () => {
  return(
    <Switch>
      <Route path="/form" exact component={Application}/>
      <Route path="/form/:idParams" exact component={Application}/>
      <Route path="/list" exact component={List}/>
    </Switch>
  );
}