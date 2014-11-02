import sublime, sublime_plugin, os, sys, os.path

class DuplicateLineCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        path, dirs, files = os.walk("issue_logger").next()
        file_count = len(files) - 2
        path_name = "issue_logger/username" + str(file_count+1) + ".txt"
        for region in self.view.sel():
                with open( path_name, "a" ) as f:
                    f.write( self.view.substr(region) )
                    sublime.error_message("Issue (" + str(sublime.Region.size(region)) + " bytes) logged as 'username" + str(file_count + 1) + "'")
