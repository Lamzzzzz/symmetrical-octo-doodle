function flat(depth = 1) {
    function f(value, parent) {}
    return this.reduce((prev, current) => {
        for (let i = 0; i < depth; i++) {
            if (!Array.isArray(current)) break
            current.length > 1 ? f() : (current = current[0])
        }
        return prev.push(current)
    }, [])
}

function flat(depth = 1) {
    const result = [](function f(arr, depth) {
        for (const item of arr) {
            if (Array.isArray(item) && depth > 0) {
                f(item, depth - 1)
            } else {
                item !== void 0 && result.push(item)
            }
        }
    })(this, depth)

    return result
}

function flat(depth = 1) {
    return depth > 0
        ? this.reduce((prev, current) => {
              if (Array.isArray(current)) {
                  flat.call(current, depth - 1)
              } else {
                  prev !== void 0 && prev.push(current)
              }
          }, [])
        : this.slice()
}

function flat(depth = 1) {
    return depth > 0
        ? this.reduce((prev, current) => {
              return prev.concat(
                  Array.isArray(current)
                      ? flat.call(current, depth - 1)
                      : current
              )
          }, [])
        : this.slice()
}
