export class Helpers {

    public static convertToObject(obj: any): Object {
		return JSON.parse(JSON.stringify(obj));
	}

	public static parseDateNumber (date: string): string {
        let dateCorrector = date;
        if(date.length == 1)
            dateCorrector = '0' + date;
        return dateCorrector;
    }
    public static dateOfString(): string {
        const now = new Date();
        //const date = this.parseDateNumber (now.getDate().toString()) + '-' + this.parseDateNumber ((now.getMonth()+1).toString());
        const time = this.parseDateNumber (now.getHours().toString()) + ':' + this.parseDateNumber (now.getMinutes().toString());
        return time;
    }
}
