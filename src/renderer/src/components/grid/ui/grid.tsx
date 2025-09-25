export const Grid = ({ children }: { children: React.ReactNode }): React.JSX.Element => {
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">{children}</div>
}
