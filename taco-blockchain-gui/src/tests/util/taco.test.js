const fork = require('../../util/fork');

describe('fork', () => {
  it('converts number mojo to fork', () => {
    const result = fork.mojo_to_fork(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to fork', () => {
    const result = fork.mojo_to_fork('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to fork string', () => {
    const result = fork.mojo_to_fork_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to fork string', () => {
    const result = fork.mojo_to_fork_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number fork to mojo', () => {
    const result = fork.fork_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string fork to mojo', () => {
    const result = fork.fork_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = fork.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = fork.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = fork.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = fork.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = fork.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = fork.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
