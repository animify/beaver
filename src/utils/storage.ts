import { Container } from '@inlet/react-pixi';


export default class Storage {
    private static _CONTAINER: PIXI.DisplayObject = null;

    public static get CONTAINER() {
        return Storage._CONTAINER;
    }

    public static set CONTAINER(container: PIXI.DisplayObject) {
        Storage._CONTAINER = container;
    }
}