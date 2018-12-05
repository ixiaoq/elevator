
class Floor {
    constructor() {
        this.up = false;
        this.down = false;
    }

    set(type, state) {
        this[type] = state;
    }

    get(type) {
        return this[type];
    }

    showLight(callback) {
        let { up, down } = this;
        callback && callback({ up, down });
    }
    
}


class Elevator {
    constructor (id, totalFloor) {
        this.ID = id;
        // 电梯列表
        this.floorList = []; 
        // 楼层数
        this.totalFloor = totalFloor;
        // 0 stop  1 up  2 down
        this.state = 0;
        this.currentFloor = 0;

        this.startNum = 0;
        this.endNum = 0;
        
        this.init();
    }

    init () {
        let allFloor = this.createFloor();
        this.floorList = allFloor;

        console.log(allFloor);
    }

    // 创建楼层
    createFloor () {
        let { totalFloor } = this;
        let _floorList = [];

        for (let i = 0; i < totalFloor; i++) {
            let _temp = new Floor();
            _floorList.push(_temp);
        }
        return _floorList;
    }
    
    callElevator(num, direction) {
        let { currentFloor, state } = this;
        this.floorList[num - 1].set(direction, true);

        let _state = this.computedDirection(currentFloor, num - 1);
        if (state === 0) {
            if (_state === 0) {
                console.log("开门");
            }
            let _temp = direction === "up" ? 1 : 2;
            this.setState(_temp);
        }
    }

    toFloor(num) {
        let { currentFloor, state } = this;
        let _state = this.computedDirection(currentFloor, num - 1);
        if (state === 0) {
            this.setState(_state);
        } else {
            let direction = state === 1 ? "up" : "down";
            this.floorList[num - 1].set(direction, true);
        }
    }

    computedDirection(curr, to) {
        if (curr < to) return 1;
        if (curr > to) return 2;
        if (curr === to) return 0;
    }

    setState(_state) {
        this.state = _state;
    }

    start() {
        let { currentFloor, floorList, startNum, endNum } = this;

        if (state === 1) {

        }
    }
}

let ele = new Elevator(1, 10);

ele.callElevator(2, "up");
// ele.callElevator("down", 1);
// ele.toFloor(3);
console.log(ele);