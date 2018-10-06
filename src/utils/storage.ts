export default class Storage {
    private static _CONTAINER: PIXI.DisplayObject;

    public static get CONTAINER() {
        return Storage._CONTAINER;
    }

    public static set CONTAINER(container: PIXI.DisplayObject) {
        Storage._CONTAINER = container;
    }
}
