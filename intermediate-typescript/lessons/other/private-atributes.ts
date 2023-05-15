class Foo {
  #name;

  constructor(public rawName?: string) {
    this.#name = rawName ?? '(no name)';
  }

  log() {
    console.log(this.#name);
  }
}

const foo = new Foo();
foo.log();