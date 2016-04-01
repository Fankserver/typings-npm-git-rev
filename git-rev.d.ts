declare type StringCallback = (str: string) => void;

declare namespace GitRev {
	function short(callback: StringCallback): void;
	function long(callback: StringCallback): void;
	function branch(callback: StringCallback): void;
	function tag(callback: StringCallback): void;
	function log(callback: (log: Array<Array<string>>) => void): void;
}

export = GitRev;
