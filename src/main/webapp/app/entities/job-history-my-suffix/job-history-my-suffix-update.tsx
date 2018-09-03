import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
// tslint:disable-next-line:no-unused-variable
import { Translate, translate, ICrudGetAction, ICrudGetAllAction, ICrudPutAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IJobMySuffix } from 'app/shared/model/job-my-suffix.model';
import { getEntities as getJobs } from 'app/entities/job-my-suffix/job-my-suffix.reducer';
import { IDepartmentMySuffix } from 'app/shared/model/department-my-suffix.model';
import { getEntities as getDepartments } from 'app/entities/department-my-suffix/department-my-suffix.reducer';
import { IEmployeeMySuffix } from 'app/shared/model/employee-my-suffix.model';
import { getEntities as getEmployees } from 'app/entities/employee-my-suffix/employee-my-suffix.reducer';
import { getEntity, updateEntity, createEntity, reset } from './job-history-my-suffix.reducer';
import { IJobHistoryMySuffix } from 'app/shared/model/job-history-my-suffix.model';
// tslint:disable-next-line:no-unused-variable
import { convertDateTimeFromServer } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IJobHistoryMySuffixUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: number }> {}

export interface IJobHistoryMySuffixUpdateState {
  isNew: boolean;
  jobId: number;
  departmentId: number;
  employeeId: number;
}

export class JobHistoryMySuffixUpdate extends React.Component<IJobHistoryMySuffixUpdateProps, IJobHistoryMySuffixUpdateState> {
  constructor(props) {
    super(props);
    this.state = {
      jobId: 0,
      departmentId: 0,
      employeeId: 0,
      isNew: !this.props.match.params || !this.props.match.params.id
    };
  }

  componentDidMount() {
    if (!this.state.isNew) {
      this.props.getEntity(this.props.match.params.id);
    }

    this.props.getJobs();
    this.props.getDepartments();
    this.props.getEmployees();
  }

  saveEntity = (event, errors, values) => {
    values.startDate = new Date(values.startDate);
    values.endDate = new Date(values.endDate);

    if (errors.length === 0) {
      const { jobHistoryEntity } = this.props;
      const entity = {
        ...jobHistoryEntity,
        ...values
      };

      if (this.state.isNew) {
        this.props.createEntity(entity);
      } else {
        this.props.updateEntity(entity);
      }
      this.handleClose();
    }
  };

  handleClose = () => {
    this.props.history.push('/entity/job-history-my-suffix');
  };

  render() {
    const { jobHistoryEntity, jobs, departments, employees, loading, updating } = this.props;
    const { isNew } = this.state;

    return (
      <div>
        <Row className="justify-content-center">
          <Col md="8">
            <h2 id="jhipsterBlogApp.jobHistory.home.createOrEditLabel">
              <Translate contentKey="jhipsterBlogApp.jobHistory.home.createOrEditLabel">Create or edit a JobHistory</Translate>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="8">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <AvForm model={isNew ? {} : jobHistoryEntity} onSubmit={this.saveEntity}>
                {!isNew ? (
                  <AvGroup>
                    <Label for="id">
                      <Translate contentKey="global.field.id">ID</Translate>
                    </Label>
                    <AvInput id="job-history-my-suffix-id" type="text" className="form-control" name="id" required readOnly />
                  </AvGroup>
                ) : null}
                <AvGroup>
                  <Label id="startDateLabel" for="startDate">
                    <Translate contentKey="jhipsterBlogApp.jobHistory.startDate">Start Date</Translate>
                  </Label>
                  <AvInput
                    id="job-history-my-suffix-startDate"
                    type="datetime-local"
                    className="form-control"
                    name="startDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.jobHistoryEntity.startDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="endDateLabel" for="endDate">
                    <Translate contentKey="jhipsterBlogApp.jobHistory.endDate">End Date</Translate>
                  </Label>
                  <AvInput
                    id="job-history-my-suffix-endDate"
                    type="datetime-local"
                    className="form-control"
                    name="endDate"
                    value={isNew ? null : convertDateTimeFromServer(this.props.jobHistoryEntity.endDate)}
                  />
                </AvGroup>
                <AvGroup>
                  <Label id="languageLabel">
                    <Translate contentKey="jhipsterBlogApp.jobHistory.language">Language</Translate>
                  </Label>
                  <AvInput
                    id="job-history-my-suffix-language"
                    type="select"
                    className="form-control"
                    name="language"
                    value={(!isNew && jobHistoryEntity.language) || 'FRENCH'}
                  >
                    <option value="FRENCH">
                      <Translate contentKey="jhipsterBlogApp.Language.FRENCH" />
                    </option>
                    <option value="ENGLISH">
                      <Translate contentKey="jhipsterBlogApp.Language.ENGLISH" />
                    </option>
                    <option value="SPANISH">
                      <Translate contentKey="jhipsterBlogApp.Language.SPANISH" />
                    </option>
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="job.id">
                    <Translate contentKey="jhipsterBlogApp.jobHistory.job">Job</Translate>
                  </Label>
                  <AvInput id="job-history-my-suffix-job" type="select" className="form-control" name="jobId">
                    <option value="" key="0" />
                    {jobs
                      ? jobs.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="department.id">
                    <Translate contentKey="jhipsterBlogApp.jobHistory.department">Department</Translate>
                  </Label>
                  <AvInput id="job-history-my-suffix-department" type="select" className="form-control" name="departmentId">
                    <option value="" key="0" />
                    {departments
                      ? departments.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <AvGroup>
                  <Label for="employee.id">
                    <Translate contentKey="jhipsterBlogApp.jobHistory.employee">Employee</Translate>
                  </Label>
                  <AvInput id="job-history-my-suffix-employee" type="select" className="form-control" name="employeeId">
                    <option value="" key="0" />
                    {employees
                      ? employees.map(otherEntity => (
                          <option value={otherEntity.id} key={otherEntity.id}>
                            {otherEntity.id}
                          </option>
                        ))
                      : null}
                  </AvInput>
                </AvGroup>
                <Button tag={Link} id="cancel-save" to="/entity/job-history-my-suffix" replace color="info">
                  <FontAwesomeIcon icon="arrow-left" />&nbsp;
                  <span className="d-none d-md-inline">
                    <Translate contentKey="entity.action.back">Back</Translate>
                  </span>
                </Button>
                &nbsp;
                <Button color="primary" id="save-entity" type="submit" disabled={updating}>
                  <FontAwesomeIcon icon="save" />&nbsp;
                  <Translate contentKey="entity.action.save">Save</Translate>
                </Button>
              </AvForm>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (storeState: IRootState) => ({
  jobs: storeState.job.entities,
  departments: storeState.department.entities,
  employees: storeState.employee.entities,
  jobHistoryEntity: storeState.jobHistory.entity,
  loading: storeState.jobHistory.loading,
  updating: storeState.jobHistory.updating
});

const mapDispatchToProps = {
  getJobs,
  getDepartments,
  getEmployees,
  getEntity,
  updateEntity,
  createEntity,
  reset
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JobHistoryMySuffixUpdate);
