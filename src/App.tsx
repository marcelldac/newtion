import Editor from "./components/Editor";

function App() {
  return (
    <div className="min-h-screen p-8 text-zinc-900 bg-gradient-to-r from-slate-600 via-slate-700 to-slate-800">
      <div className="bg-white mx-auto rounded-xl shadow-sm border-black/20 overflow-hidden sm:w-full md:w-[800px] lg:w-[1100px]">
        {/* <aside className="bg-zinc-50 border-r border-r-zinc-100 p-4">
          <div className="flex gap-2 group">
            <button className="w-3 h-3 rounded-full bg-red-400" />
            <button className="w-3 h-3 rounded-full bg-yellow-400" />
            <button className="w-3 h-3 rounded-full bg-green-400" />
          </div>
        </aside> */}
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  );
}

export default App;
