import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, UncontrolledTooltip, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './employee.reducer';
import { IEmployee } from 'app/shared/model/employee.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEmployeeDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class EmployeeDetail extends React.Component<IEmployeeDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { employeeEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            <Translate contentKey="jdemoApp.employee.detail.title">Employee</Translate> [<b>{employeeEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="firstName">
                <Translate contentKey="jdemoApp.employee.firstName">First Name</Translate>
              </span>
              <UncontrolledTooltip target="firstName">
                <Translate contentKey="jdemoApp.employee.help.firstName" />
              </UncontrolledTooltip>
            </dt>
            <dd>{employeeEntity.firstName}</dd>
            <dt>
              <span id="lastName">
                <Translate contentKey="jdemoApp.employee.lastName">Last Name</Translate>
              </span>
            </dt>
            <dd>{employeeEntity.lastName}</dd>
            <dt>
              <span id="email">
                <Translate contentKey="jdemoApp.employee.email">Email</Translate>
              </span>
            </dt>
            <dd>{employeeEntity.email}</dd>
            <dt>
              <span id="phoneNumber">
                <Translate contentKey="jdemoApp.employee.phoneNumber">Phone Number</Translate>
              </span>
            </dt>
            <dd>{employeeEntity.phoneNumber}</dd>
            <dt>
              <span id="hireDate">
                <Translate contentKey="jdemoApp.employee.hireDate">Hire Date</Translate>
              </span>
            </dt>
            <dd>
              <TextFormat value={employeeEntity.hireDate} type="date" format={APP_DATE_FORMAT} />
            </dd>
            <dt>
              <span id="salary">
                <Translate contentKey="jdemoApp.employee.salary">Salary</Translate>
              </span>
            </dt>
            <dd>{employeeEntity.salary}</dd>
            <dt>
              <span id="commissionPct">
                <Translate contentKey="jdemoApp.employee.commissionPct">Commission Pct</Translate>
              </span>
            </dt>
            <dd>{employeeEntity.commissionPct}</dd>
            <dt>
              <Translate contentKey="jdemoApp.employee.department">Department</Translate>
            </dt>
            <dd>{employeeEntity.department ? employeeEntity.department.id : ''}</dd>
            <dt>
              <Translate contentKey="jdemoApp.employee.manager">Manager</Translate>
            </dt>
            <dd>{employeeEntity.manager ? employeeEntity.manager.id : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/employee" replace color="info">
            <FontAwesomeIcon icon="arrow-left" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.back">Back</Translate>
            </span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/employee/${employeeEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" />{' '}
            <span className="d-none d-md-inline">
              <Translate contentKey="entity.action.edit">Edit</Translate>
            </span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ employee }: IRootState) => ({
  employeeEntity: employee.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeDetail);
