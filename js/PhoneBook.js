'use strict';

function Call(durationChangeCallback, stateChangeCallback) {
    this.customerId = null;
    this.dateStart = null;
    this.dateEnd = null;
    this.duration = 0;
    this.status = null;
    this.phoneNumber = null;
    const getRandom = () => Math.floor(Math.random() * 10);

    let intervalId = null
    const startCalculatingDuration = () => {
        intervalId = setInterval(() => {
            this.duration += 1;
            durationChangeCallback(this.duration)
        }, 1000)
    }

    const stopCalculatingDuration = () => {
       clearInterval(intervalId);
    }


    const changeCallStatus = (newStatus) => {
        this.status = newStatus;
        stateChangeCallback(this.status)

        if(this.status === Call.STATUSES.connecting) {
            this.dateStart = new Date();
            startCalculatingDuration()

            setTimeout(() => {
                const status = getRandom() > 5 ? Call.STATUSES.declined : Call.STATUSES.inProgress
                changeCallStatus(status)
            }, 1000)
        }

        if(this.status === Call.STATUSES.inProgress) {
            setTimeout(() => changeCallStatus(Call.STATUSES.completed), 3000)
        }

        if([Call.STATUSES.completed, Call.STATUSES.declined].includes(this.status)) {
            stopCalculatingDuration();
            this.dateEnd = new Date();
        }
    }

    // Receives user
    this.makeCall = ({id, phone}) => {
        this.customerId = id;
        this.phoneNumber = phone;

        changeCallStatus(Call.STATUSES.connecting);
    }
}

Call.STATUSES = {
    connecting: 'connecting',
    inProgress: 'inProgress',
    declined: 'declined',
    onHold: 'onHold',
    completed: 'completed',
}
