local function is_enabled(value)
  if value == nil then
    return false
  end

  return value == true or pandoc.utils.stringify(value):lower() == "true"
end

function Meta(meta)
  if not FORMAT:match("revealjs") or not is_enabled(meta["chapter-progress"]) then
    return
  end

  quarto.doc.add_html_dependency({
    name = "quarto-kit-chapter-progress",
    version = "0.1.0",
    scripts = { "chapter-progress.js" },
    stylesheets = { "chapter-progress.css" }
  })

  quarto.doc.include_file("after-body", "chapter-progress.html")
end
