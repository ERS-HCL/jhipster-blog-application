import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import JobHistoryMySuffix from './job-history-my-suffix';
import JobHistoryMySuffixDetail from './job-history-my-suffix-detail';
import JobHistoryMySuffixUpdate from './job-history-my-suffix-update';
import JobHistoryMySuffixDeleteDialog from './job-history-my-suffix-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={JobHistoryMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={JobHistoryMySuffixUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={JobHistoryMySuffixDetail} />
      <ErrorBoundaryRoute path={match.url} component={JobHistoryMySuffix} />
    </Switch>
    <ErrorBoundaryRoute path={`${match.url}/:id/delete`} component={JobHistoryMySuffixDeleteDialog} />
  </>
);

export default Routes;
