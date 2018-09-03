import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Entry from './entry';
import EntryDetail from './entry-detail';
import EntryUpdate from './entry-update';
import EntryDeleteDialog from './entry-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntryUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntryDetail} />
      <ErrorBoundaryRoute path={match.url} component={Entry} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={EntryDeleteDialog} />
  </>
);

export default Routes;
