import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Card extends Component {
    render() {
        return (
            <div className="dashboard-card" >
                <Link to={`/projects/${this.props.data.id}`} >
                    <div className="card-content">
                        <div className="card-heading">
                            <div className="card-title">{this.props.data.schoolName}</div>
                            <div className="card-subtitle">{this.props.data.package}</div>
                        </div>
                        <hr className="card-divider" />
                        <div className="card-main">
                            <div className="csm-info">
                                <span>CSM:</span>
                                <div className="csm-name">{this.props.data.csm}</div>
                            </div>
                            <div className="date-info">
                                <span>Target Close Date:</span>
                                <div className="csm-name">{this.props.data.date}</div>
                            </div>
                            <div className="card-stats">
                                <div className="card-sis">
                                    <span className="card-task-title">SIS</span>
                                    <div className="progress-bar">
                                        <div className="progress-sis" style={{ width: '80%' }}>
                                            80%
                                    </div>
                                    </div>
                                </div>
                                <div className="card-branding">
                                    <span className="card-task-title">Branding</span>
                                    <div className="progress-bar">
                                        <div className="progress-branding" style={{ width: '100%' }}>
                                            100%
                                    </div>
                                    </div>
                                </div>
                                <div className="card-auth">
                                    <span className="card-task-title">Authentication</span>
                                    <div className="progress-bar">
                                        <div className="progress-auth" style={{ width: '90%' }}>
                                            90%
                                    </div>
                                    </div>
                                </div>
                                <div className="card-migration">
                                    <span className="card-task-title">Migration</span>
                                    <div className="progress-bar">
                                        <div className="progress-migration" style={{ width: '40%' }}>
                                            40%
                                    </div>
                                    </div>
                                </div>
                                <div className="card-other">
                                    <span className="card-task-title">Other</span>
                                    <div className="progress-bar">
                                        <div className="progress-other" style={{ width: '25%' }}>
                                            25%
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

export default Card